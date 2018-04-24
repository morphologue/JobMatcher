import * as React from "react";
import { Job } from "../Model/Job";

interface Props
{
    job: Job
}    

export class JobDetail extends React.PureComponent<Props>
{
    render(): JSX.Element
    {
        return (
            <section>
                <h2>{`${this.props.job.company}: ${this.props.job.name}`}</h2>
                <p><strong>Job skills: </strong>{this.props.job.skills}</p>
            </section>    
        );
    }
}    
