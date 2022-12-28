import React from "react";
import { Formik } from "formik";
// import { addPost } from "../features/posts/postSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add new Post!</h1>
      <Formik
        initialValues={{ id: uuidv4(), title: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) errors.title = "Required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("values:", values);
          dispatch(addPost(values));
          setSubmitting(false);
          resetForm();
        }}
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
            <input
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

export default AddForm;
