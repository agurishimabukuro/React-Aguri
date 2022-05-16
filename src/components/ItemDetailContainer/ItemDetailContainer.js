import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	getDocs,
	collection,
	query,
	where,
	documentId,
} from "firebase/firestore";
import db  from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
// import Loading from "../Loading/Loading";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState([]);
	const paramsID = useParams();

	useEffect(() => {
		const getProducts = async () => {
			const q = query(
				collection(db, "productos"),
				where(documentId(), "==", paramsID.id)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItemDetail(docs);
		};
		getProducts();
	}, [paramsID]);

	return (
		<div className="itemDetailContainer">
			{itemDetail.map((productos) => {
				return <ItemDetail key={productos.id} data={productos} />;
			})}
		</div>
	);
};

export default ItemDetailContainer;
