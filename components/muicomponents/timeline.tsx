import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function NoOppositeContent() {
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <div className='flex flex-row justify-between'>
                        <div className='font-bold w-[10vw]'>Jan 2021 - Present </div>
                        <div className='font-semibold w-[15vw]'> Frontend Developer SDE 1 </div>
                        <div className='font-semibold w-[20vw]'>ADVANCED VOICE RESEARCH LABS</div>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                <div className='flex flex-row justify-between'>
                        <div className='font-bold w-[10vw]'>Jan 2020 - Dec 2020</div>
                        <div className='font-semibold w-[15vw]'> Frontend Developer </div>
                        <div className='font-semibold w-[20vw]'>PRESENOVA MANAGEMENT CONSULTANCIES</div>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
