import Category from "../models/CategoryModel.js";
import User from "../models/UserModel.js";

// add category
export const addCategoryController = async (req, res) => {
  const { type, userId } = req.body;

  let category = await Category.findOne({ type: type, user: userId });
  if (category)
    return res.status(400).send("Category with this name is already exist");

  category = new Category({
    type,
    user: userId,
  });

  const savedCategory = await category.save();

  await User.findOneAndUpdate(
    { _id: userId },
    {
      $push: { categories: savedCategory._id },
    }
  );

  res.status(200).send({ savedCategory });
};

// get categories with user id

export const getCategoriesByUserId = async (req, res) => {
  const { userId } = req.params;

  let categories = await Category.find({ user: userId });

  res.status(200).send(categories);
};

// delete category
export const deleteCategoryController = async (req, res) => {
  const { categoryId, userId } = req.body;

  let category = await Category.findByIdAndDelete(categoryId);

  if (!category) return res.status(200).send("Category already Deleted");

  await User.updateOne(
    { _id: userId },
    {
      $pull: { categories: categoryId },
    }
  );

  res.status(200).send(category);
};

// update category name
export const updateCategoryController = async (req, res) => {
  const { type, userId, newType } = req.body;
  let category = await Category.findOneAndUpdate(
    { type: type, user: userId },
    {
      $set: { type: newType },
    },
    { new: true }
  );

  res.status(200).send(category);
};
