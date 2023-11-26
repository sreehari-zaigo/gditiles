import React, { useCallback, useEffect, useMemo, useState } from "react";
import useSWR, { mutate } from "swr";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, getKeyValue, Spinner, Switch, Pagination } from "@nextui-org/react";
import { EditIcon } from "./Editicon";
import { DeleteIcon } from "./DeteIcon";
import { toast } from "react-toastify";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const ProductList = () => {
    const [page, setPage] = useState(1);
    const [hasMore, setHasmore] = useState(true)
    const { data, isLoading } = useSWR(`/api/product?page=${page}`, fetcher, {
        keepPreviousData: true,
    });

    const rowsPerPage = 3;


    const deleteProduct = async (productId) => {
        try {
            await fetch(`/api/product/${productId}`, {
                method: 'DELETE',
            });
            mutate(`/api/product?page=${page}`);
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

    const pages = useMemo(() => {
        return data?.totalProducts ? Math.ceil(data.totalProducts / rowsPerPage) : 0;
    }, [data?.totalProducts, rowsPerPage]);

    const loadingState = isLoading || data?.products.length === 0 ? "loading" : "idle";

    const changePopularProductStatus = async (id, state, key) => {
        try {
            await fetch(`/api/product/${id}?fn=${key}&state=${state}`, {
                method: 'PUT',
            });
            mutate(`/api/product?page=${page}`);
            toast.success('Product status updated successfully');
        } catch (error) {
            toast.error('Failed to update product status:');
        }
    }
    const columns = [
        { name: "NAME", uid: "product_name" },
        { name: "CATEGORY", uid: "product_category_id" },
        { name: "PRICE", uid: "product_price" },
        { name: "POPULAR", uid: "Popular_product" },
        { name: "STATUS", uid: "status" },
        { name: "ACTIONS", uid: "actions" },
    ];
    const renderCell = (product, columnKey) => {
        const cellValue = product[columnKey];
        switch (columnKey) {
            case "product_name":
                return (
                    <p className="text-bold text-sm capitalize text-default-400">{product.product_name}</p>
                );
            case "product_category_id":
                return (
                    <p className="text-bold text-sm capitalize text-default-400">{product.product_category.category_name}</p>
                );
            case "product_price":
                return (
                    <p className="text-bold text-sm capitalize text-default-400">{product.product_price}$</p>
                );
            case "Popular_product":
                return (
                    <Switch size="sm" isSelected={product.Popular_product} onChange={() => changePopularProductStatus(product.id, product.Popular_product, "popular")}>
                    </Switch>
                );
            case "status":
                return (
                    <Switch size="sm" isSelected={product.status} onChange={() => changePopularProductStatus(product.id, product.status, "status")}>
                    </Switch>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        {/* <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip> */}
                        <Tooltip content="Edit product">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete product">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => deleteProduct(product.id)}>
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }

    return (
        <div className='mt-24'>
            <Table aria-label="Example table with custom cells"
                bottomContent={
                    pages > 0 ? (
                        <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="primary"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                            />
                        </div>
                    ) : null
                }
            // {...args}
            >
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={data?.products ?? []} loadingContent={<Spinner />}
                    loadingState={loadingState} emptyContent={"No product to display."}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductList;
