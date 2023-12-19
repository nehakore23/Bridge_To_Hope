import React, { useEffect, useState } from 'react'

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")
function PressDash() {

	const [tableData, setTableData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = () => {
        getRequest(endPoints.getPress, (data) => {
            console.log("data = ", data)
            setTableData(data)
        })
    }
	return (
		<>
			<div className="content">
				<h3>
					Press
				</h3>

			</div>
		</>
	)
}

export default PressDash