'use client'
import Link from 'next/link';
import { useContext, useState } from 'react';
import axios from 'axios';
import React from 'react';

import HomeContext from '@/context/HomeContext';
import {
    useQuery,
    useMutation,
    dehydrate,
    useQueryClient,
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
export default function RecentChats() {
    const { auth, EachUsersMessages, setEachUsersMessages, SelectedName, setSelectedName, Group, setGroup, Receiver, setReceiver, setAI } = useContext(HomeContext)


    const directChat = useQuery({
        queryKey: ["DirectChatUsers"],
        queryFn: () => {
            return DirectChatUsers(auth.user.id);
        },
    });

    const ProjectGroupChat = useQuery({
        queryKey: ["getProjectGroupChats"],
        queryFn: () => {
            return getProjectGroupChats(auth.user.id);
        }
    })

    const GroupChat = useQuery({
        queryKey: ["GroupChatUsers"],
        queryFn: () => {
            return GroupChatUsers(auth.user.id);
        }
    })

    const test1 = useGetPersonalChats()
    return (
        <div className='bg-white p-2 border border-gray-200 w-[300px] xl:w-1/4 xl:min-w-[350px] hidden md:block'>
            <div className="w-full flex border border-gray-200 p-2">
                <img src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="" className="w-12 h-12 xl:w-16 xl:h-16 rounded-full mx-auto" />
                <div className="border border-gray-200 flex rounded-full px-4 items-center w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z"></path>
                    </svg>
                    <div className='text-lg lg:text-lg xl:text-2xl p-2'>Search</div>
                </div>
            </div>
            <div className="border border-gray-200">
                <div className="w-full max-w-md p-4 bg-white text-[#5E5873]">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg lg:text-xl font-bold leading-none text-[#5E5873]">Direct Chat</h5>
                        <Link href="#" className="text-sm font-medium text-[#0075FF] hover:underline">
                            View all
                        </Link>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200">
                            {directChat?.data?.map((item) => (
                                <div>
                                    {item.id != auth.user.id && item.id != 4 && (
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p onClick={() => {
                                                        setAI(false)
                                                        setGroup(false)
                                                        setReceiver(item.id)
                                                        setSelectedName(item.username)
                                                        test1.mutate({ sender: auth.user.id, receiver: item.id, group: false,ai:false })
                                                    }} className="text-sm lg:text-md font-medium text-[#5E5873] truncate hover:text-[#0075FF] hover:underline">
                                                        {item.username}
                                                    </p>
                                                    <p className="text-sm lg:text-md text-[#5E5873] truncate">
                                                        {item?.last_login}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-full max-w-md p-4 bg-white text-[#5E5873]">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg lg:text-xl font-bold leading-none text-[#5E5873]">Project Chat</h5>
                        <Link href="#" className="text-sm font-medium text-[#0075FF] hover:underline">
                            View all
                        </Link>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200">
                            {ProjectGroupChat?.data?.map((item) => (
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p onClick={() => {
                                                setGroup(true)
                                                setSelectedName(item.grp_name)
                                                setReceiver(item.grp_id)
                                                test1.mutate({ sender: auth.user.id, receiver: item.grp_id, group: true })
                                            }} className="text-sm lg:text-md font-medium text-[#5E5873] truncate hover:text-[#0075FF] hover:underline">
                                                {item.grp_name}
                                            </p>
                                            <p className="text-sm lg:text-md text-[#5E5873] truncate">
                                                {item.created_at_date + " " + item.created_at_time}
                                            </p>
                                        </div>
                                    </div>
                                </li>))}
                        </ul>
                    </div>
                </div>
                <div className="w-full max-w-md p-4 bg-white text-[#5E5873]">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg lg:text-xl font-bold leading-none text-[#5E5873]">Group Chat</h5>
                        <Link href="#" className="text-sm font-medium text-[#0075FF] hover:underline">
                            View all
                        </Link>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200">
                            {GroupChat?.data?.map((item) => (
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p onClick={() => {

                                                setGroup(true)
                                                setSelectedName(item.grp_name)
                                                setReceiver(item.grp_id)
                                                test1.mutate({ sender: auth.user.id, receiver: item.grp_id, group: true })
                                            }} className="text-sm lg:text-md font-medium text-[#5E5873] truncate hover:text-[#0075FF] hover:underline">
                                                {item.grp_name}
                                            </p>
                                            <p className="text-sm lg:text-md text-[#5E5873] truncate">
                                                {item.created_at_date + " " + item.created_at_time}
                                            </p>
                                        </div>
                                    </div>
                                </li>))}
                        </ul>
                    </div>
                </div>

                <div className="w-full max-w-md p-4 bg-white text-[#5E5873]">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-[#5E5873]">Copilot</h5>
                        <Link href="#" className="text-sm font-medium text-[#0075FF] hover:underline">
                            View all
                        </Link>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200">

                            <li className="py-2">
                                <div className="flex items-center">
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p onClick={() => {
                                            setAI(true)
                                            setGroup(false)
                                            setSelectedName('Trumio Copilot')
                                            setReceiver(4)
                                            test1.mutate({ sender: auth.user.id, receiver: 4, group: false, ai: true })
                                        }} className="text-md font-medium text-[#5E5873] truncate hover:text-[#0075FF] hover:underline">
                                            Trumio Copilot
                                        </p>
                                        <p className="text-md text-[#5E5873] truncate">
                                            How May i Help You
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}


const DirectChatUsers = async (id) => {
    return axios.get(`http://127.0.0.1:8000/api/v1/__get__direct__chat__users__/${id}`).then((response) => {
        return response.data
    })
}
const GroupChatUsers = async (id) => {
    return axios.get(`http://127.0.0.1:8000/api/v1/__get__group__chat__users__/${id}`).then((response) => {
        return response.data
    })
}
const getProjectGroupChats = async (id) => {
    return axios.get(`http://127.0.0.1:8000/api/v1/__get__project__related__groups__/${id}`).then((response) => {
        return response.data
    })
}




const fetchPersonalChats = async (data) => {
    console.log(data)
    return axios
        .post(
            data.group ? `http://127.0.0.1:8000/api/v1/__get__group__messages__/` : `http://127.0.0.1:8000/api/v1/__get__personal__messages__/`,
            { sender: data.sender, receiver: data.receiver, ai: data.ai },
            {
                headers: {
                    Authorization: `Bearer ${data.access}`,
                },
            }
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return [];
        });
};

const useGetPersonalChats = () => {
    const queryClient = useQueryClient();
    const { EachUsersMessages, setEachUsersMessages } = useContext(HomeContext);
    return useMutation({
        mutationFn: fetchPersonalChats,
        onSuccess: (data) => {
            console.log(data);
            setEachUsersMessages(data);
            queryClient.invalidateQueries(["UsersMessages"]);
        },
        onError: (context) => {
            queryClient.setQueryData(["UsersMessages"], context.previousData);
        },
    });
};


