import React from "react";
import { Input, Select, Divider } from "antd";
import { Formik, Field, Form } from "formik";
import TextArea from "antd/lib/input/TextArea";
import "./form.css";
import axios from "./config/axios";

function JobApplication() {
  const { Option } = Select;
  return (
    <div className="main-container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          jobTitle: "",
          experience: "",
          skills: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
          axios
            .post(
              "/users/application-form",
              values
            )
            .then((response) => {
              console.log(
                "resolve",
                response.data
              );
              if (
                response.data.hasOwnProperty(
                  "errors"
                )
              ) {
                alert(response.data.message);
              } else {
                alert(
                  "your application has been submitted "
                );
              }
            })
            .catch((err) => {
              console.log("rejected", err);
            });
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <div className="form-container">
            <Form onSubmit={handleSubmit}>
              <div>
                <div className="field-con">
                  <div>
                    <label className="label-con">
                      Full name
                    </label>
                    <Field
                      name="name"
                      as={Input}
                      placeholder="Enter your firstname"
                    />
                  </div>
                </div>
                <Divider />

                <div className="field-con">
                  <div>
                    <label className="label-con">
                      Email address
                    </label>
                    <Field
                      name="email"
                      as={Input}
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <Divider />
                <div className="field-con">
                  <div>
                    <label className="label-con">
                      Contact Number
                    </label>
                    <Field
                      name="phone"
                      as={Input}
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>
                <Divider />
                <div className="field-con">
                  <div>
                    <label className="label-con">
                      Applying for job
                    </label>

                    {/* <Field name="customerId">
                      {({
                        field: { value },
                        form: {
                          setFieldValue,
                          
                        },
                      }) => (
                        <Select
                          style={{
                            width: "100% ",
                          }}
                          onChange={(
                            value,
                            option
                          ) => {
                            setFieldValue(
                              "jobTitle",
                              value
                            );
                            onChange &&
                              onChange(
                                value,
                                option
                              );
                          }}
                          placeholder="Select Customer"
                          // setting undefined will show the placeholder
                          value={
                            value === "" ||
                            value === null
                              ? undefined
                              : value
                          }
                          {...restProps}
                        >
                          <Option
                            value="Front-End Developer"
                            key="1"
                          ></Option>
                        </Select>
                      )}
                    </Field> */}

                    <Select
                      name="jobTitle"
                      placeholder="----Select----"
                      onChange={(value) =>
                        setFieldValue(
                          "jobTitle",
                          value
                        )
                      }
                    >
                      <Option value="Front-End Developer">
                        Front-End Developer
                      </Option>
                      <Option value="Node.js Developer">
                        Node.js Developer
                      </Option>
                      <Option value="MEAN Stack Developer">
                        MEAN Stack Developer
                      </Option>
                      <Option value="Full Stack Developer">
                        Full Stack Developer
                      </Option>
                    </Select>
                  </div>
                </div>
                <Divider />
                <div className="field-con">
                  <div>
                    <label className="label-con">
                      Experience
                    </label>
                    <Field
                      name="experience"
                      as={Input}
                      placeholder="Experience (2 years, 3 months)"
                    />
                  </div>
                </div>
                <Divider />
                <div className="field-con">
                  <div>
                    <label className="label-con">
                      Technical Skills
                    </label>
                    <Field
                      name="skills"
                      as={TextArea}
                      placeholder="Technical Skill"
                    />
                  </div>
                </div>
                <Divider />
                <div>
                  <button
                    input
                    type="submit"
                    value="Submit"
                  >
                    Send Application
                  </button>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
export default JobApplication;
