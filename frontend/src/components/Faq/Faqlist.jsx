/* eslint-disable no-unused-vars */
import React from 'react';
import {faqs} from "../../assets/data/faqs.js";
import FaqItem from './FaqItem';
const Faqlist = () => {
  return (
    <ul className='mt-[35px]'>
      {faqs.map((item, index) => <FaqItem key={index} index={index} item={item} />)}
    </ul>
  )
}

export default Faqlist