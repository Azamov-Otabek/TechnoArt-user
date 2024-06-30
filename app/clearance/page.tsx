"use client";
import { ProFormGroup, ProFormText } from "@ant-design/pro-components";
import React from "react";
import Container from "../../components/container/page";
import { Form, Radio } from "antd";
import './style.css'

function page() {
  async function handleSubmit(value: any) {
    console.log(value);
  }

  const validatePhoneNumber = (_: any, value: any) => {
    if (!value || value.startsWith("+998")) {
      return Promise.resolve();
    }
    return Promise.reject("Phone Number must start with +998");
  };

  return (
    <div>
      <Container>
        <p className="flex gap-[20px] mt-[20px]">
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Bosh sahifa
          </span>
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Smartfonlar
          </span>
          <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
            Xaridni rasmiylashtirish
          </span>
        </p>
      </Container>

      <div className="mt-[28px]">
        <Container>
          <div className="flex justify-between">
            <div className="w-[900px] h-[660px] bg-[white] p-[44px] rounded-md">
              <Form onFinish={(value) => handleSubmit(value)}>
                <ProFormGroup>
                  <div>
                    <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">Telfon raqam </p>
                  <ProFormText
                    hasFeedback
                    name="phone_number"
                    placeholder="Please enter your Phone number"
                    rules={[
                      {
                        required: true,
                        message: "Phone number is required",
                      },
                      {
                        validator: validatePhoneNumber,
                      },
                    ]}
                    fieldProps={{
                      style: { width: "380px", height: "50px" },
                    }}
                  />
                  </div>
                    <div>
                    <p className="text-[12px] font-medium text-[#240E00CC] mb-[5px]">Ism/Familya</p>
                    <ProFormText
                  hasFeedback
                  name="full_name"
                  placeholder="Please enter your Full Name"
                  rules={[
                    {
                      required: true,
                      message: "Full Name is required",
                    } 
                  ]}
                  fieldProps={{
                    style: { width: "380px", height: "50px" },
                  }}
                />
                    </div>
                </ProFormGroup>
                <ProFormGroup>
                <Radio.Group defaultValue="1" className="flex flex-col gap-[7px] mt-[12px]">
                  <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="1">Do’kondan olib ketish .</Radio>
                  <Radio className="text-[18px]  text-[#240E00CC] font-medium" value="2">Xaridingizni uyingizga yetkazib berish </Radio>
                </Radio.Group>
                </ProFormGroup>
                <ProFormGroup>
                  
                </ProFormGroup>
              </Form>
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default page;
