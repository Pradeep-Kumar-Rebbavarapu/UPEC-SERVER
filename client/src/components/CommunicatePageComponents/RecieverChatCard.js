"use client";
import React from 'react'
import { useState } from 'react';

export default function RecieverChatCard({ele}) {
  return (
    <div className='flex items-center p-5'>
      <img src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="" className="w-16 h-16 rounded-full" />
      <div className="text-md xl:text-lg text-gray-600 p-5 rounded-lg shadow-lg mx-5">{ele.message}</div>
    </div>
  )
}
