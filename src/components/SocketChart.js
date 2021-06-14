import React, { useState, useContext, useEffect, useCallback } from "react";
import { SocketContext } from "../context/socket";
import { List, Card } from "antd";

const SocketChart = () => {
    const socket = useContext(SocketContext);
    const [data, setData] = useState({});
    const listener = useCallback((...arg) => {
        setData(...arg);
    }, []);
    useEffect(() => {
        socket.on("data", listener);
        return () => {
            socket.off("data", listener);
        }
    }, [socket, data, listener]);

    const cpu = data.lidar ? data.lidar.cpu : { "1": 0, "2": 0 };
    const memory = data.lidar ? data.lidar.memory : { "total": 0, "available": 0 };
    const id = data.sensor ? data.sensor.uuid : "test";
    const motor_rpm = data.sensor ? data.sensor.motor_rpm : 0;
    const output = data.sensor ? data.sensor.output : 0;

    const values = [
        { title: "CPU_1", value: cpu["1"] },
        { title: "CPU_2", value: cpu["2"] },
        { title: "MEMORY_TOTAL", value: memory["total"] },
        { title: "MEMORY_AVAILABLE", value: memory["available"] },
        { title: "SERVER", value: id },
        { title: "MORTOR", value: motor_rpm },
        { title: "OUTPUT", value: output },
    ];

    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 7,
                xl: 7,
                xxl: 7
            }}
            dataSource={values}
            renderItem={(item) => (
                <List.Item>
                    <Card title={item.title}>{item.value}</Card>
                </List.Item>
            )}
        />
    );
};

export default SocketChart;