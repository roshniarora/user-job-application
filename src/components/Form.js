import React from "react";
import { Input, Select, Divider } from "antd";
import { Formik, Field, Form } from "formik";
import TextArea from "antd/lib/input/TextArea";
import "./form.css";

function JobApplication() {
  const { Option } = Select;
  return (
    <div className="main-container">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          contact: "",
          job: "",
          experience: "",
          skills: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <div className="form-container">
            <Form onSubmit={handleSubmit}>
              <div>
                <div className="field-con">
                  <div>
                    <label className="label-con">
                      Full name
                    </label>
                    <Field
                      name="fullNmae"
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
                      name="contact"
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

                    <Select placeholder="----Select----">
                      <Option value="">
                        Front-End Developer
                      </Option>
                      <Option value="">
                        Node.js Developer
                      </Option>
                      <Option value="">
                        MEAN Stack Developer
                      </Option>
                      <Option value="">
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
