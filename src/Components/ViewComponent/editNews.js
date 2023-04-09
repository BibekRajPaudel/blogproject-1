import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import {
  FormInput,
  FormTextAreaField,
  SmallFormTextAreaField,
} from "../input/FormInput";
import { useFormik, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const EditNews = ({item}) => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [selectedFile2, setSelectedFile2] = useState([]);
  const [selectedFile3, setSelectedFile3] = useState([]);
  const [selectedFile4, setSelectedFile4] = useState([]);
  const [selectedFile5, setSelectedFile5] = useState([]);
  const [selectedFile6, setSelectedFile6] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("None");
  const [tag, setTag] = useState("None");

  const router = useNavigate();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };


  const formik = useFormik({
    initialValues: {
      title: item.title,
      description1: item.description1,
      description2: item.description2,
      description3: item.description3,
      description4: item.description4,
      description5: item.description5,
      description6: item.description6,
      author: item.author,
      subDescription: item.subDescription,
      category: item.category[0],
      image1: item.image1[0],
      image2: item.image2[0],
      image3: item.image3[0],
      image4: item.image4[0],
      image5: item.image5[0],
      image6: item.image6[0],
      tag: item.tag[0],
      link1:item.link1,
      link2:item.link2,
      link3:item.link3,
      link4:item.link4,
      link5:item.link5,
      link6:item.link6,
    },

    onSubmit: async (
      {
        title,
        description1,
        description2,
        description3,
        description4,
        description5,
        description6,
        author,
        subDescription,
        category,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        tag,
        link1,
        link2,
        link3,
        link4,
        link5,
        link6
      },
      actions
    ) => {
      setLoading(true);

      const formData = new FormData();
      if (image1 && image1.length > 0) {
        for (let i = 0; i < image1.length; i++) {
          formData.append("image1", image1[i]);
        }
      }
  
      if (image2 && image2.length > 0) {
        for (let i = 0; i < image2.length; i++) {
          formData.append("image2", image2[i]);
        }
      }

      if (image3 && image3.length > 0) {
        for (let i = 0; i < image3.length; i++) {
          formData.append("image3", image3[i]);
        }
      }
     
      if (image4 && image4.length > 0) {
        for (let i = 0; i < image4.length; i++) {
          formData.append("image4", image4[i]);
        }
      }
     
      if (image5 && image5.length > 0) {
        for (let i = 0; i < image5.length; i++) {
          formData.append("image5", image5[i]);
        }
      }
     
      if (image6 && image6.length > 0) {
        for (let i = 0; i < image6.length; i++) {
          formData.append("image6", image6[i]);
        }
      }
      
      
      formData.append("title", title);
      formData.append("link1", link1);
      formData.append("link2", link2);
      formData.append("link3", link3);
      formData.append("link4", link4);
      formData.append("link5", link5);
      formData.append("link6", link6);
      formData.append("description1", description1);
      formData.append("description2", description2);
      formData.append("description3", description3);
      formData.append("description4", description4);
      formData.append("description5", description5);
      formData.append("description6", description6);
      formData.append("author", author);
      formData.append("subDescription", subDescription);
      formData.append("category", category);
      formData.append("tag", tag);
    
      await axios.put(`${process.env.REACT_APP_URL}/updatenews/${item._id}`, formData, {
        headers: {
          "content-Type": "multipart/form-data",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      })
      actions.resetForm();
      setSelectedFile([]);
      setLoading(false);
      window.location.reload();
    },
  });

  const onfileChange = () => {
    formik.setFieldValue("image1", selectedFile);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    onDrop: (acceptedFiles) => {
      setSelectedFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      formik.setFieldValue("image1", acceptedFiles);
    },
  });

  const selectedImages = selectedFile?.map((file, i) => (
    <div key={i}>
      <img
        className="rounded-[8px] w-[200px] h-[200px]"
        src={file.preview}
        alt=""
      />
    </div>
  ));

  const onfileChange2 = () => {
    formik.setFieldValue("image2", selectedFile2);
  };

  const {
    getRootProps: getRootProps2,
    getInputProps: getInputProps2,
    isDragActive: isDragActive2,
  } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    onDrop: (acceptedFiles) => {
      setSelectedFile2(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      formik.setFieldValue("image2", acceptedFiles);
    },
  });

  const selectedImages2 = selectedFile2?.map((file, i) => (
    <div key={i}>
      <img
        className="rounded-[8px] w-[200px] h-[200px]"
        src={file.preview}
        alt=""
      />
    </div>
  ));

  const onfileChange3 = () => {
    formik.setFieldValue("image3", selectedFile3);
  };

  const {
    getRootProps: getRootProps3,
    getInputProps: getInputProps3,
    isDragActive: isDragActive3,
  } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    onDrop: (acceptedFiles) => {
      setSelectedFile3(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      formik.setFieldValue("image3", acceptedFiles);
    },
  });

  const selectedImages3 = selectedFile3?.map((file, i) => (
    <div key={i}>
      <img
        className="rounded-[8px] w-[200px] h-[200px]"
        src={file.preview}
        alt=""
      />
    </div>
  ));

  const onfileChange4 = () => {
    formik.setFieldValue("image4", selectedFile4);
  };

  const {
    getRootProps: getRootProps4,
    getInputProps: getInputProps4,
    isDragActive: isDragActive4,
  } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    onDrop: (acceptedFiles) => {
      setSelectedFile4(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      formik.setFieldValue("image4", acceptedFiles);
    },
  });

  const selectedImages4 = selectedFile4?.map((file, i) => (
    <div key={i}>
      <img
        className="rounded-[8px] w-[200px] h-[200px]"
        src={file.preview}
        alt=""
      />
    </div>
  ));

  const onfileChange5 = () => {
    formik.setFieldValue("image5", selectedFile5);
  };

  const {
    getRootProps: getRootProps5,
    getInputProps: getInputProps5,
    isDragActive: isDragActive5,
  } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    onDrop: (acceptedFiles) => {
      setSelectedFile5(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      formik.setFieldValue("image5", acceptedFiles);
    },
  });

  const selectedImages5 = selectedFile5?.map((file, i) => (
    <div key={i}>
      <img
        className="rounded-[8px] w-[200px] h-[200px]"
        src={file.preview}
        alt=""
      />
    </div>
  ));

  const onfileChange6 = () => {
    formik.setFieldValue("image6", selectedFile5);
  };

  const {
    getRootProps: getRootProps6,
    getInputProps: getInputProps6,
    isDragActive: isDragActive6,
  } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    onDrop: (acceptedFiles) => {
      setSelectedFile6(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      formik.setFieldValue("image6", acceptedFiles);
    },
  });

  const selectedImages6 = selectedFile6?.map((file, i) => (
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
      <div className="grid grid-cols-2 gap-5 px-4">
        <div className="w-full">
          <h1 className="text-[16px] font-[700] mb-3">शीर्षक</h1>
          <FormInput
            name="title"
            formik={formik}
            //placeholder="शीर्षक..."
            type="text"
          />
        </div>

        <div className="w-full">
          <h1 className="text-[16px] font-[700] mb-3">लेखक</h1>
          <FormInput
            name="author"
            formik={formik}
            //placeholder="Enter Author..."
            type="text"
          />
        </div>

        {/* <div className="w-full">
          <h1 className="text-[16px] font-[700] mb-3">लिङ्क १</h1>
          <FormInput
            name="link1"
            formik={formik}
            //placeholder="Enter Author..."
            type="text"
          />
        </div>

        <div className="w-full">
          <h1 className="text-[16px] font-[700] mb-3">लिङ्क २</h1>
          <FormInput
            name="link2"
            formik={formik}
            //placeholder="Enter Author..."
            type="text"
          />
        </div> */}

        <div className="w-full">
          <div className="w-full grid grid-cols-1 gap-3">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="tag" className="text-[16px] font-[700] mb-3">
                ट्याग
              </label>
              <select
                className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                id="tag"
                name="tag"
                value={tag}
                onChange={(e) => [
                  formik.setFieldValue("tag", e.target.value),
                  setTag(e.target.value),
                ]}
              >
                <option className="text-gray-400" value="None">
                  -- एक विकल्प छान्नुहोस् --
                </option>
                <option value="news">समाचार</option>
                <option value="wealth">अर्थ</option>
                <option value="bank-market">बैंक / बजार</option>
                <option value="philosophy">दर्शन संवाद</option>
                <option value="startup">स्टार्टअप</option>
                <option value="additional">थप</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full grid grid-cols-1 gap-3">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="category" className="text-[16px] font-[700] mb-3">
                श्रेणी
              </label>
              <select
                className="w-full p-3 rounded-md outline-primary-blue font-poppins text-xs border-[1px]"
                id="category"
                name="category"
                value={category}
                onChange={(e) => [
                  formik.setFieldValue("category", e.target.value),
                  setCategory(e.target.value),
                ]}
              >
                <option className="text-gray-400" value="None">
                  -- एक विकल्प छान्नुहोस् --
                </option>
                <option value="business">व्यापार</option>
                <option value="infrastructure">पूर्वाधार</option>
                <option value="investment">लगानी</option>
                <option value="development">विकास</option>
                <option value="industry">उद्योग</option>
                <option value="agriculture">कृषि</option>
                <option value="banking">बैंकिङ्ग</option>
                <option value="insurance">बीमा</option>
                <option value="sharemarket">सेयर बजार</option>
                <option value="auto">अटो</option>
                <option value="gold/silver">सुनचाँदी</option>
                <option value="fuel">इन्धन</option>
                <option value="interview">अन्तरर्वाता</option>
                <option value="report">रिपोर्ट</option>
                <option value="analysis">विश्लेषण</option>
                <option value="blog">ब्लक</option>
                <option value="Hotel">होटल</option>
                <option value="biography">जिवनी</option>
                <option value="economy">अर्थतन्त्र </option>
                <option value="tourism">पर्यटन</option>
                <option value="technique">प्रविधी</option>
                <option value="corporatemarket">कर्पाेरेट बजार</option>
                <option value="photo/feature">फोटो/फिचर </option>
                <option value="employment">रोजगार</option>
                <option value="international"> अन्तर्राष्ट्रिय</option>
                <option value="newspaper">पत्रपत्रिका</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">उपविवरण</h1>
        <SmallFormTextAreaField
          name="subDescription"
          formik={formik}
          type="text"
        />
      </div>

      {/* 11111  */}
      <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">विवरण-१</h1>
        <FormTextAreaField name="description1" formik={formik} type="text" />
      </div>

      {/* <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">छवि</h1>
        <div
          {...getRootProps()}
          className="flex justify-center items-center bg-[#FAFAFA] w-full border-[1px] border-dashed border-[#686868] h-[215px] rounded-[8px] cursor-pointer"
        >
          <input
            name="image1"
            {...getInputProps()}
            onChange={onfileChange}
            type="file"
          />

          <label
            className="bg-[#FFFFFF] p-[10px] rounded-[8px] shadow-allShadow"
            htmlFor="file-input"
          >
            {isDragActive ? (
              <p>फाइलहरू यहाँ छोड्नुहोस् ...</p>
            ) : (
              <p>एकल छवि अपलोड गर्नुहोस्</p>
            )}
          </label>
        </div>
        <div className="text-[red]">
          {formik.touched["image1"] && formik.errors["image1"]
            ? formik.errors["image1"]
            : null}
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-5 gap-5">
        {selectedImages}
      </div> */}

       <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">लिङ्क १</h1>
        <FormInput
          name="link1"
          formik={formik}
         // placeholder="शीर्षक,नमुना,ठूलो,नमुना,घर,...."
          type="text"
        />
      </div>

      {/* 222222222222 */}

      <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">विवरण-२</h1>
        <FormTextAreaField name="description2" formik={formik} type="text" />
      </div>

      {/* <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">छवि</h1>
        <div
          {...getRootProps2()}
          className="flex justify-center items-center bg-[#FAFAFA] w-full border-[1px] border-dashed border-[#686868] h-[215px] rounded-[8px] cursor-pointer"
        >
          <input
            name="image2"
            {...getInputProps2()}
            onChange={onfileChange2}
            type="file"
          />

          <label
            className="bg-[#FFFFFF] p-[10px] rounded-[8px] shadow-allShadow"
            htmlFor="file-input"
          >
            {isDragActive ? (
              <p>फाइलहरू यहाँ छोड्नुहोस् ...</p>
            ) : (
              <p>एकल छवि अपलोड गर्नुहोस्</p>
            )}
          </label>
        </div>
        <div className="text-[red]">
          {formik.touched["image2"] && formik.errors["image2"]
            ? formik.errors["image2"]
            : null}
        </div>
      </div> */}

      {/* <div className="flex flex-wrap justify-around mt-5 gap-5">
        {selectedImages2}
      </div>  */}
       <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">लिङ्क २</h1>
        <FormInput
          name="link2"
          formik={formik}
         // placeholder="शीर्षक,नमुना,ठूलो,नमुना,घर,...."
          type="text"
        />
      </div>

      {/* 3333333 */}

      <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">विवरण-३</h1>
        <FormTextAreaField name="description" formik={formik} type="text" />
      </div>

      {/* <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">छवि</h1>
        <div
          {...getRootProps3()}
          className="flex justify-center items-center bg-[#FAFAFA] w-full border-[1px] border-dashed border-[#686868] h-[215px] rounded-[8px] cursor-pointer"
        >
          <input
            name="image2"
            {...getInputProps3()}
            onChange={onfileChange3}
            type="file"
          />

          <label
            className="bg-[#FFFFFF] p-[10px] rounded-[8px] shadow-allShadow"
            htmlFor="file-input"
          >
            {isDragActive ? (
              <p>फाइलहरू यहाँ छोड्नुहोस् ...</p>
            ) : (
              <p>एकल छवि अपलोड गर्नुहोस्</p>
            )}
          </label>
        </div>
        <div className="text-[red]">
          {formik.touched["image3"] && formik.errors["image3"]
            ? formik.errors["image3"]
            : null}
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-5 gap-5">
        {selectedImages3}
      </div> */}

<div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">लिङ्क ३</h1>
        <FormInput
          name="link3"
          formik={formik}
         // placeholder="शीर्षक,नमुना,ठूलो,नमुना,घर,...."
          type="text"
        />
      </div>

      {/* 444444 */}

      <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">विवरण-४ </h1>
        <FormTextAreaField name="description3" formik={formik} type="text" />
      </div>

      {/* <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">छवि</h1>
        <div
          {...getRootProps4()}
          className="flex justify-center items-center bg-[#FAFAFA] w-full border-[1px] border-dashed border-[#686868] h-[215px] rounded-[8px] cursor-pointer"
        >
          <input
            name="image2"
            {...getInputProps4()}
            onChange={onfileChange4}
            type="file"
          />

          <label
            className="bg-[#FFFFFF] p-[10px] rounded-[8px] shadow-allShadow"
            htmlFor="file-input"
          >
            {isDragActive ? (
              <p>फाइलहरू यहाँ छोड्नुहोस् ...</p>
            ) : (
              <p>एकल छवि अपलोड गर्नुहोस्</p>
            )}
          </label>
        </div>
        <div className="text-[red]">
          {formik.touched["image4"] && formik.errors["image4"]
            ? formik.errors["image4"]
            : null}
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-5 gap-5">
        {selectedImages4}
      </div> */}

<div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">लिङ्क ४</h1>
        <FormInput
          name="link4"
          formik={formik}
          //placeholder="शीर्षक,नमुना,ठूलो,नमुना,घर,...."
          type="text"
        />
      </div>

      {/* 5555 */}

      <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">विवरण-५ </h1>
        <FormTextAreaField name="description4" formik={formik} type="text" />
      </div>

      {/* <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">छवि</h1>
        <div
          {...getRootProps5()}
          className="flex justify-center items-center bg-[#FAFAFA] w-full border-[1px] border-dashed border-[#686868] h-[215px] rounded-[8px] cursor-pointer"
        >
          <input
            name="image2"
            {...getInputProps5()}
            onChange={onfileChange5}
            type="file"
          />

          <label
            className="bg-[#FFFFFF] p-[10px] rounded-[8px] shadow-allShadow"
            htmlFor="file-input"
          >
            {isDragActive ? (
              <p>फाइलहरू यहाँ छोड्नुहोस् ...</p>
            ) : (
              <p>एकल छवि अपलोड गर्नुहोस्</p>
            )}
          </label>
        </div>
        <div className="text-[red]">
          {formik.touched["image5"] && formik.errors["image5"]
            ? formik.errors["image5"]
            : null}
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-5 gap-5">
        {selectedImages5}
      </div> */}

<div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">लिङ्क ५</h1>
        <FormInput
          name="link5"
          formik={formik}
          //placeholder="शीर्षक,नमुना,ठूलो,नमुना,घर,...."
          type="text"
        />
      </div>

      {/* 666666 */}

      <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">विवरण-६ </h1>
        <FormTextAreaField name="description5" formik={formik} type="text" />
      </div>

      {/* <div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">छवि</h1>
        <div
          {...getRootProps6()}
          className="flex justify-center items-center bg-[#FAFAFA] w-full border-[1px] border-dashed border-[#686868] h-[215px] rounded-[8px] cursor-pointer"
        >
          <input
            name="image2"
            {...getInputProps6()}
            onChange={onfileChange6}
            type="file"
          />

          <label
            className="bg-[#FFFFFF] p-[10px] rounded-[8px] shadow-allShadow"
            htmlFor="file-input"
          >
            {isDragActive ? (
              <p>फाइलहरू यहाँ छोड्नुहोस् ...</p>
            ) : (
              <p>एकल छवि अपलोड गर्नुहोस्</p>
            )}
          </label>
        </div>
        <div className="text-[red]">
          {formik.touched["image6"] && formik.errors["image6"]
            ? formik.errors["image6"]
            : null}
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-5 gap-5">
        {selectedImages6}
      </div> */}

<div className="w-full mt-5 px-4">
        <h1 className="text-[16px] font-[700] mb-3">लिङ्क ६</h1>
        <FormInput
          name="link6"
          formik={formik}
         // placeholder="शीर्षक,नमुना,ठूलो,नमुना,घर,...."
          type="text"
        />
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

export default EditNews;
