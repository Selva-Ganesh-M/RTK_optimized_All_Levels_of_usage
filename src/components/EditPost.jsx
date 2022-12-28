import { Field, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { getSingPost, updatePost } from "../features/posts/postSlice";

const EditPost = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) => getSingPost(state, id));
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("values:", values);
    dispatch(updatePost(values));
    setSubmitting(false);
    resetForm();
    navigate("/");
  };
  return (
    <div>
      <h1>Edit Post!</h1>
      <Formik
        initialValues={{ id: post.id, title: post.title }}
        validate={(values) => {
          const errors = {};
          if (!values.title) errors.title = "Required";
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Field
              placeholder={`${post.title}`}
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditPost;
