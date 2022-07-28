import { useState} from "react";

const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div class="btn-group btn-group-sm" role="group">
            <i onClick={decrement} type="button" class="text-primary bi bi-dash-circle-fill fs-1"></i>
            <p class='fs-2 ms-4 me-4 '>{count}</p>
            <i onClick={increment} type="button" class="text-primary bi bi-plus-circle-fill fs-1"></i>
        </div>
    )
}

export default Counter