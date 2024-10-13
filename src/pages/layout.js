import {render} from "@testing-library/react";
import {Outlet} from "react-router-dom";

export default function Home() {
    render(
        <>
            <Outlet/>
        </>
    )
}