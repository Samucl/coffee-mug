import { useSpring } from "react-spring";
import { TableWrapper } from "./Table.styles"

type TableProps = {
    isMugSlide: boolean
}

const Table = ({ isMugSlide }: TableProps) => {

    const zoomTable = useSpring({
        height: isMugSlide ? '10vh' : '60vh',
        config: { mass: 1, tension: 50, friction: 10 },
      });

    return (
        <TableWrapper style={{...zoomTable}}/>
    )
};

export default Table;