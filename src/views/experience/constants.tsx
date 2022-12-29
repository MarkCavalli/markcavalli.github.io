import React from "react";
import { JobType, WorkItemData } from './components/workItem/constants';
import Adacta from './components/jobDescriptions/adacta/Adacta';
import BKC from './components/jobDescriptions/bkc/BKC';
import GamedevStartup from './components/jobDescriptions/gamedevStartup/GamedevStartup';
import OnMoon from './components/jobDescriptions/onMoon/OnMoon'
import PSB from './components/jobDescriptions/psb/PSB';

export const jobs: WorkItemDataExtended[] = [
    {
        type: JobType.Work,
        title: 'Promsvyazbank',
        position: 'Senior Front-end Developer',
        fromDate: {
            year: 2021,
            month: 11,
        },
        toDate: {
            year: 2024,
            month: 1,
        },
        tags: ['html', 'scss', 'typescript', 'angular'],
        desc: <PSB />
    },
    {
        type: JobType.Work,
        title: 'OnMoon',
        position: 'Fullstack Typescript Developer',
        fromDate: {
            year: 2019,
            month: 9,
        },
        toDate: {
            year: 2021,
            month: 11,
        },
        tags: ['html', 'scss', 'javascript', 'typescript', 'vue', 'vuex', 'vuerouter', 'nodejs', 'postgres', 'sql'],
        desc: <OnMoon />
    },
    {
        type: JobType.Work,
        title: 'Gamedev Startup',
        position: 'Fullstack Javascript Developer',
        fromDate: {
            year: 2019,
            month: 4,
        },
        toDate: {
            year: 2019,
            month: 8,
        },
        tags: ['html', 'scss', 'javascript', 'vue', 'vuex', 'vuerouter', 'nodejs', 'mongodb'],
        desc: <GamedevStartup />
    },
    {
        type: JobType.Work,
        title: 'Adacta',
        position: 'Javascript Developer',
        fromDate: {
            year: 2019,
            month: 3,
        },
        toDate: {
            year: 2019,
            month: 4,
        },
        tags: ['javascript', 'typescript', 'angular', 'json'],
        desc: <Adacta />
    },
    {
        type: JobType.Work,
        title: 'BKC-ih',
        position: 'Junior Front-end Developer',
        fromDate: {
            year: 2018,
            month: 2,
        },
        toDate: {
            year: 2019,
            month: 3,
        },
        tags: ['html', 'css', 'javascript', 'jquery', 'vue'],
        desc: <BKC />
    },
];

export interface WorkItemDataExtended extends WorkItemData {
    desc?: JSX.Element
}