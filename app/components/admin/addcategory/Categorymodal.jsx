"use client"

import { Button, Input, Spinner } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import useSWR from "swr";
const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

export default function CategoryInput({ onClose }) {
  const [value, setValue] = useState("");

  const validateCategory = (value) => value.match(/^[A-Z][A-Za-z0-9.-]{0,29}$/);

  const isInvalid = useMemo(() => {
    if (value === "") return false;
    return validateCategory(value) ? false : true;
  }, [value]);

  const { data, isLoading, isError } = useSWR(
    `/api/categories`,
    fetcher
  );

  const handleSubmit = async () => {
    if (isInvalid) return;
    await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify({ value }),
    });
    // mutate();
  };

  return (
    <>
      <Input
        type="text"
        label="Enter the category"
        labelPlacement="outside"
        placeholder="Enter your category"
        value={value}
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "default"}
        className="text-gray-500"
        description="Start with a capital letter, no symbols allowed."
        errorMessage={isInvalid && "Please enter a valid category"}
        onValueChange={setValue}
      />
      <Button className='bg-orange' onClick={handleSubmit}>
        Save
      </Button>
      <div className="py-6 flex flex-col gap-4">
        <p className="text-gray-800 font-semibold text-base">Category list</p>
        {isLoading && <Spinner color='warning' size='md'/>}
        {isError && <p>Error loading data</p>}
        {data && (
          data.map((cat) => (
            <div className="flex justify-between items-center border-b-1" key={cat.id}>
              <h2 className="text-gray-700 text-base font-medium">{cat.category_name}</h2>
              <div className="hover: cursor-pointer">
                <LuTrash2 className="text-red-500 text-lg hover:scale-110" />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
