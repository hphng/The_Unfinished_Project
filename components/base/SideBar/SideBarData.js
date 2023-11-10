import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    {
        title: 'All Letters',
        path: '/allLetters',
        icons: <AiIcons.AiFillHome />,
    },
    {
        title: 'Starred',
        path: '/starred',
        icons: <AiIcons.AiOutlineStar />,
    },
    {
        title: 'Drafts',
        path: '/drafts',
        icons: <RiIcons.RiDraftLine />,
    },
    {
        title: 'Sent',
        path: '/sent',
        icons: <FaIcons.FaPaperPlane />,
    },
    {
        title: 'Receiver',
        path: '/receiver',
        icons: <FaIcons.FaUserFriends />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Friend 1',
                path: '/receiver/friend1',
                icons: <AiIcons.AiFillProfile/>
            },
            {
                title: 'Friend 2',
                path: '/receiver/friend2',
                icons: <AiIcons.AiFillProfile />
            },
            {
                title: 'Friend 3',
                path: '/receiver/friend3',
                icons: <AiIcons.AiFillProfile />
            }
        ]
    }
]