import React, { Fragment, useEffect, useState } from "react";
import { IconCaretUp, IconCaretDown } from "@tabler/icons-react";
import { Group, Text, List } from "@mantine/core";

const DropDown = ({ text, label }) => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <Group>
                <Text>{label}</Text>
                {open ? (
                    <IconCaretUp
                        size="1.2rem"
                        stroke={4}
                        onClick={() => {
                            setOpen((open) => !open);
                        }}
                    />
                ) : (
                    <IconCaretDown
                        size="1.2rem"
                        stroke={4}
                        onClick={() => {
                            setOpen((open) => !open);
                        }}
                    />
                )}
            </Group>
            {open && (
                <List>
                    {text.map((item, index) => {
                        return <List.Item icon=" " key={index}>{item[0]} : {item[1]}</List.Item>;
                    })}
                </List>
            )}
        </Fragment>
    );
};

export default DropDown;