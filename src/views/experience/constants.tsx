import React from "react";
import { JobType, WorkItemData } from './components/workItem/constants';
import Adacta from './components/jobDescriptions/adacta/Adacta';
import BKC from './components/jobDescriptions/bkc/BKC';
import GamedevStartup from './components/jobDescriptions/gamedevStartup/GamedevStartup';
import OnMoon from './components/jobDescriptions/onMoon/OnMoon'
import PSB from './components/jobDescriptions/psb/PSB';

import CSPortal from './components/jobDescriptions/csPortal/CSPortal';

export const enum JobFilter {
    All = 'all',
    Production = 'production',
    Pet = 'pet'
}

export const filterMenu = [
    {
        name: 'All',
        type: JobFilter.All,
        route: `/experience/${JobFilter.All}`,
    },
    {
        name: 'Production',
        type: JobFilter.Production,
        route: `/experience/${JobFilter.Production}`,
    },
    {
        name: 'Pet-Projects',
        type: JobFilter.Pet,
        route: `/experience/${JobFilter.Pet}`,
    }
]

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
            year: 2042,
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
    {
        type: JobType.Pet,
        title: 'Trading bot',
        fromDate: {
            year: 2022,
            month: 11,
        },
        toDate: {
            year: 2022,
            month: 12,
        },
        tags: ['typescript', 'websockets', 'nodejs'],
    },
    {
        type: JobType.Pet,
        title: 'Backtesting trade strategies',
        fromDate: {
            year: 2022,
            month: 6,
        },
        toDate: {
            year: 2022,
            month: 7,
        },
        tags: ['typescript', 'nodejs', 'react', 'nodejs'],
    },
    {
        type: JobType.Pet,
        title: 'Browser game bot',
        fromDate: {
            year: 2021,
            month: 4,
        },
        toDate: {
            year: 2021,
            month: 10,
        },
        tags: ['html', 'scss', 'javascript', 'typescript', 'docker', 'kafka', 'microservices', 'nodejs', 'postgres', 'sql', 'chrome-extension'],
    },
    {
        type: JobType.Pet,
        title: 'Mentoring',
        fromDate: {
            year: 2020,
            month: 8,
        },
        toDate: {
            year: 2041,
            month: 10,
        },
        tags: ['html', 'css', 'javascript', 'nodejs', 'typescript', 'react', 'vue'],
    },
    {
        type: JobType.Pet,
        title: 'Messenger',
        fromDate: {
            year: 2019,
            month: 12,
        },
        toDate: {
            year: 2020,
            month: 4,
        },
        tags: ['html', 'scss', 'typescript', 'vue', 'vuex', 'vuerouter', 'nodejs', 'mysql', 'sql', 'cordova'],
    },
    {
        type: JobType.Pet,
        title: 'GTA 5 Role Play Servers',
        fromDate: {
            year: 2017,
            month: 6,
        },
        toDate: {
            year: 2019,
            month: 4,
        },
        tags: ['html', 'scss', 'javascript', 'typescript', 'vue', 'vuex', 'vuerouter', 'nodejs', 'mysql', 'sql'],
    },
    {
        type: JobType.Pet,
        title: 'Counter Strike 1.6 Gaming Portal',
        fromDate: {
            year: 2010,
            month: 3,
        },
        toDate: {
            year: 2012,
            month: 9,
        },
        tags: ['html', 'css', 'javascript', 'jquery'],
        desc: <CSPortal />
    },
];

export interface WorkItemDataExtended extends WorkItemData {
    desc?: JSX.Element
}