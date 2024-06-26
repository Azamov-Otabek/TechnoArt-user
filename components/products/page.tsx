import {
  ArrowRightOutlined,
  BarChartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button } from "antd";
import Image from "next/image";
import React from "react";
import Product from "../../images/product.png";
import "./style.css";
import Link from "next/link";
import {data_product} from '../../interfaces/products'

function page({datas}:any) {
  const number = Math.ceil(datas.price / 12)

  return (
    <Link href={'/product'}>
      <div className="w-[305px] h-[490px] pt-[50px] pb-[36px] px-[30px] bg-white rounded-xl max-sm:w-[168px] max-sm:h-[320px] max-sm:p-[5px]">
        <Image
          src={Product}
          alt="IMG"
          className="w-[150px] h-[160px] mx-auto max-sm:w-[80px] max-sm:h-[80px] max-sm:object-cover"
        />
        <p className="mt-[36px] text-[16px] mb-[16px] max-sm:mt-[5px] max-sm:text-[14px] max-sm:mb-[2px]">
          {datas.name}
        </p>
        <h4 className="font-bold text-[18px] max-sm:text-[16px]">{datas.price} so‘m</h4>
        <p className="text-[#1EB91E] mt-[11px] mb-[19px] bg-[#1EB91E14] inline-block py-2 px-4 rounded-lg max-sm:text-[14px]">
          {number} so’mdan/12 oy
        </p>
        <div className="flex max-sm:flex-col items-center justify-between gap-[10px]">
          <Button className="btn_product max-sm:w-[100%]">
            Savat <ArrowRightOutlined />
          </Button>
         <div className="flex item-center gap-[10px]">
         <Badge>
            <Avatar
              shape="square"
              size="large"
              className="bg-[#F0F0F0] cursor-pointer"
            >
              <HeartOutlined className="text-[20px] text-[black]" />
            </Avatar>
          </Badge>
          <Badge>
            <Avatar
              shape="square"
              size="large"
              className="bg-[#F0F0F0] cursor-pointer"
            >
              <BarChartOutlined className="text-[20px] text-[black]" />
            </Avatar>
          </Badge>
         </div>
        </div>
      </div>
    </Link>
  );
}

export default page;
