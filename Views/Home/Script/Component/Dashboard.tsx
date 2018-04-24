import * as React from 'react';
import { Job } from '../Model/Job';
import { Candidate } from '../Model/Candidate';
import { JobMaster } from './JobMaster';
import { JobDetail } from './JobDetail';
import { CandidateList } from './CandidateList';

interface Props
{
    jobs: Job[];
    candidates: Candidate[];
}

interface State
{
    selectedJob: Job;
}    

export class Dashboard extends React.Component<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            selectedJob: props.jobs[0]
        };
    }

    render(): JSX.Element
    {
        return (
            <div className="container-fluid">
                <div className="row">
                    <JobMaster jobs={this.props.jobs} selectedJob={this.state.selectedJob}
                        onSelect={new_selection => this.handleJobMasterSelect(new_selection)} />
                    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                        <JobDetail job={this.state.selectedJob} />
                        <CandidateList candidates={this.getRecommendedCandidates()} />
                    </main>
                </div>    
            </div>
        );
    }

    private handleJobMasterSelect(new_selection: Job)
    {
        this.setState({
            selectedJob: new_selection
        });
    }

    private getRecommendedCandidates(): Candidate[]
    {
        const error_job: Candidate = {
            candidateId: -1,
            name: '[ERROR]',
            skills: ''
        };
        return this.state.selectedJob.recommendedCandidates.map(r => this.props.candidates.find(j => j.candidateId === r) || error_job);
    }
}
