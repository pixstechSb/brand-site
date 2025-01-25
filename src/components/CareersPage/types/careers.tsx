export interface jobListType
{
    id: number;
    jobTitle: string;
    companyName: string;
    location: string;
    description: string;
    pay: string;
    jobType: string;
    shift: string;
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