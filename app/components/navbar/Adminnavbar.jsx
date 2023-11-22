"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, User } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";
const Navbartop = () => {
    return (
        <Navbar  className="navbar-header">
            <NavbarBrand>
                <p className="font-semibold text-stone-700 text-xl">Gdi Tiles Admin Pannel</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                {/* <NavbarItem>
                    <User
                    className="text-stone-950"
                        name="Gdi Admin"
                        description="Admin login"
                        avatarProps={{
                            src: "/profilepicture.jpg"
                        }}
                    />
                </NavbarItem> */}
                <NavbarItem>
                    <Button as={Link} color="primary" onPress={signOut} variant="flat" startContent={<LuLogOut />}>
                        Sign Out
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Navbartop;