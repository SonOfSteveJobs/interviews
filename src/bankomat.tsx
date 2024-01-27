import { useState } from "react";
import React from "react";
import "./styles.css";

export default function App() {
    const nominals = [10, 50, 100, 200, 500, 1000, 2000, 5000];
    const [sum, setSum] = useState("");
    const [values, setValues] = useState(null);

    const calculate = (nominals, sum) => {
        const map = {};

        while (sum) {
            for (let i = nominals.length - 1; i >= 0; i -= 1) {
                const nominal = nominals[i];
                if (sum >= nominal) {
                    sum -= nominal;
                    if (!map[nominal]) {
                        map[nominal] = 1;
                    } else {
                        map[nominal] += 1;
                    }
                    break;
                }
            }
        }

        return map;
    };

    const onWithdraw = () => {
        if (parseInt(sum) % 10 !== 0) {
            alert("The sum must be multiple of ten");
            return;
        }
        const values = calculate(nominals, parseInt(sum));
        setValues(values);
    };

    return (
        <div className="App">
            <h1>ATM Simulator</h1>
            <span>Your sum must be multiple of ten</span>
            <input
                type="text"
                placeholder="Enter a sum"
                onChange={(e) => setSum(e.target.value || "")}
            />
            <button onClick={onWithdraw}>Withdraw</button>
            <div>
                Nominals are:{" "}
                {values
                    ? Object.entries(values).map(([key, value]) => `${key} x ${value}, `)
                    : "empty"}
            </div>
        </div>
    );
}
