export interface jobListType
{
    id: number;
    Role: string;
    companyName: string;
    OfficeLocation: string;
    Requirements: string;
    ShiftAndSchedule: string;
    JobType: string;
    Pay: string;
    JobDetails: string;
}

export interface jobApplyType{
    jobId:string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    emailId: string,
    contactNumber: string,
    city: string,
    graduation: string,
    experience: string,
    careerGap: string,
    noticePeriod: string,
    ctc: string,
    offeredCtc: string,
    offerInHand: string,
    expectedCtc: string,
    resume: any
}