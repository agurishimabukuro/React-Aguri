import React, { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../firebase";
import { useParams } from "react-router";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { category } = useParams();

	useEffect(() => {
		const getProducts = async () => {
			const q = category
				? query(collection(db, "productos"), where("category", "==", category))
				: collection(db, "productos");
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProducts(docs);
		};
		getProducts();
	}, [category]);

	return (
		<div className="itemContainer">
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
