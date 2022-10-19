import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
    _id: { type: String },
    categorieId: String,
    name: String,
    plates: Array,
});

const Categories = mongoose.model("Categorie", categoriesSchema);

export default Categories;
