import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import {
  FormInput,
  FormTextAreaField,
  SmallFormTextAreaField,
} from "../input/FormInput";
import { useFormik} from "formik";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const AddVideos = () => {
  const [selectedFile0, setSelectedFile0] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      link: "",
      title:""
    },

    onSubmit: async ({ link, image, title }, actions) => {
      setLoading(true);
      const formData = new FormData();

      if (image.length > 0) {
        for (let i = 0; i < image.length; i++) {
          formData.append("image", image[i]);
        }
      }
      formData.append("link", link);
      formData.append("title", title);

      await axios.post(`${process.env.REACT_APP_URL}/videos`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      actions.resetForm();
      setSelectedFile([]);
      setLoading(false);
      window.location.reload();
    },
  });

  const onfileChange0 = () => {
    formik.setFieldValue("image", selectedFile0);
  };

  const {
    getRootProps: getRootProps0,
    getInputProps: getInputProps0,
    isDragActive: isDragActive0,
  } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".gif"],
    },
    onDrop: (acceptedFiles) => {
      setSelectedFile0(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      formik.setFieldValue("image", acceptedFiles);
    },
  });

  const selectedImages0 = selectedFile0?.map((file, i) => (
    <div key={i}>
      <img
        className="rounded-[8px] w-[200px] h-[200px]"
        src={file.preview}
        alt=""
      />
    </div>
  ));

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">शीर्षक</h1>
        <FormInput name="title" formik={formik} placeholder="" type="text" />
      </div>
      <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">लिङ्क</h1>
        <FormInput name="link" formik={formik} placeholder="" type="text" />
      </div>

      <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">फोटो</h1>
        <div
          {...getRootProps0()}
          className="flex justify-center items-center bg-[#FAFAFA] w-full border-[1px] border-dashed border-[#686868] h-[215px] rounded-[8px] cursor-pointer"
        >
          <input
            name="image"
            {...getInputProps0()}
            onChange={onfileChange0}
            type="file"
          />

          <label
            className="bg-[#FFFFFF] p-[10px] rounded-[8px] shadow-allShadow"
            htmlFor="file-input"
          >
            {isDragActive0 ? (
              <p>फाइलहरू यहाँ छोड्नुहोस् ...</p>
            ) : (
              <p>एकल छवि अपलोड गर्नुहोस्</p>
            )}
          </label>
        </div>
        <div className="text-[red]">
          {formik.touched["image"] && formik.errors["image"]
            ? formik.errors["image"]
            : null}
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-5 gap-5">
        {selectedImages0}
      </div>

      <div className="flex justify-end py-5 px-4">
        <button
          className="bg-[#2266D1] px-5 py-2 rounded-md text-white"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="flex gap-2 items-center">
              <ClipLoader color="#36d7b7" size={20} />
              <p className="opacity-[0.7]">पेश गर्नुहोस्</p>
            </div>
          ) : (
            "पेश गर्नुहोस्"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddVideos;
