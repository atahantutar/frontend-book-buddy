import React, { useEffect, useState } from "react";
import {
  getAuthors,
  addAuthor,
  getCategories,
  addCategory,
  addBook,
} from "../../axios";

const AddBook = () => {
  const [authors, setAuthors] = useState({ author: [] });
  const [isAuthor, setIsAuthor] = useState(false);
  const [authorName, setAuthorName] = useState({ name: "" });
  const [categories, setCategories] = useState({ category: [] });
  const [isCategory, setIsCategory] = useState(false);
  const [categoryName, setCategoryName] = useState({ name: "" });
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    publisher: "",
    published: "",
    isbn: "",
    categoryId: "",
    language: "",
    pages: "",
    authorId: "",
    imageUrl: "",
  });

  const data = async () => {
    const responseAuthor = await getAuthors();
    const responseCategory = await getCategories();
    setAuthors({ author: responseAuthor.data });
    setCategories({ category: responseCategory.data.Categories });
  };

  const createAuthor = async (event) => {
    event.preventDefault();
    const response = await addAuthor(authorName);
    setAuthorName({ name: response?.data?.newAuthor?.name });
    await data();
    setAuthorName({ name: "" });
    setIsAuthor(false);
  };
  const createCategory = async (event) => {
    event.preventDefault();
    const response = await addCategory(categoryName);
    setCategoryName({ name: response?.data?.newCategory?.name });
    await data();
    setCategoryName({ name: "" });
    setIsCategory(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addBook(formData);
    } catch (error) {}
  };

  useEffect(() => {
    data();
  }, []);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container py-4">
      <form id="bookForm">
        <div className="row">
          <div className="col-md-9">
            <div className="form-group">
              <label for="title">Title:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                required
                onChange={handleChange}
                value={formData.title}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="form-group">
              <label for="content">Content:</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                rows="5"
                required
                onChange={handleChange}
                value={formData.content}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label for="publisher">Publisher:</label>
              <input
                type="text"
                className="form-control"
                id="publisher"
                name="publisher"
                required
                onChange={handleChange}
                value={formData.publisher}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label for="published">Published:</label>
              <input
                type="date"
                className="form-control"
                id="published"
                name="published"
                required
                onChange={handleChange}
                value={formData.published}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label for="isbn">ISBN:</label>
              <input
                type="text"
                className="form-control"
                id="isbn"
                name="isbn"
                onChange={handleChange}
                value={formData.isbn}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label for="language">Language:</label>
              <input
                type="text"
                className="form-control"
                id="language"
                name="language"
                onChange={handleChange}
                value={formData.language}
                required
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label for="pages">Pages:</label>
              <input
                type="number"
                className="form-control"
                id="pages"
                name="pages"
                onChange={handleChange}
                value={formData.pages}
                required
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label for="imageUrl">Image URL:</label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                onChange={handleChange}
                value={formData.imageUrl}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label for="authorName">Author Select:</label>
              <select
                id="authorId"
                name="authorId"
                className="form-control"
                onChange={handleChange}
              >
                <option value="" defaultValue={""} />
                {authors?.author?.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-end">
            <div className="form-group">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setIsAuthor(!isAuthor);
                }}
                className="btn btn-primary "
              >
                Add Author
              </button>
            </div>
          </div>
          {isAuthor ? (
            <>
              <div className="col-md-3">
                <div className="form-group">
                  <label for="authorCreateName">AuthorName:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="authorName"
                    name="authorName"
                    onChange={(event) =>
                      setAuthorName({ name: event.target.value })
                    }
                    value={authorName.name}
                    required
                  />
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-end">
                <div className="form-group">
                  <button onClick={createAuthor} className="btn btn-primary ">
                    Add Author
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label for="categoryId">Category Select:</label>
              <select
                id="categoryId"
                name="categoryId"
                className="form-control"
                onChange={handleChange}
              >
                <option value="" defaultValue={""} />
                {categories?.category?.map((cate) => (
                  <option key={cate.id} value={cate.id}>
                    {cate.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-end">
            <div className="form-group">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setIsCategory(!isCategory);
                }}
                className="btn btn-primary "
              >
                Add Category
              </button>
            </div>
          </div>
          {isCategory ? (
            <>
              <div className="col-md-3">
                <div className="form-group">
                  <label for="categoryName">Category Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                    name="categoryName"
                    onChange={(event) =>
                      setCategoryName({ name: event.target.value })
                    }
                    value={categories.name}
                    required
                  />
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-end">
                <div className="form-group">
                  <button onClick={createCategory} className="btn btn-primary ">
                    Add Category
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div className="form-group py-4">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isAuthor || isCategory}
            onClick={handleSubmit}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;