import React from "react";
import { useSelector } from "react-redux";

export default function () {
    const user = useSelector(state => state.user);
    
    return (
        <>
            {user.username}
        </>
    )
}