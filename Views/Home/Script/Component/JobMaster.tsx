import * as React from "react";
import { Job } from "../Model/Job";

interface Props
{
    jobs: Job[],
    selectedJob: Job,
    onSelect: (new_selection: Job) => void;
}

// A vertical nav bar which which lists the given jobs in order
export class JobMaster extends React.PureComponent<Props>
{
    render(): JSX.Element
    {
        return (
            <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar" style={{
                position: "fixed",
                top: 10,
                bottom: 0,
                left: 0,
                borderRight: "1px solid #eee"
            }}>
                <ul className="nav nav-pills flex-column">
                    {this.props.jobs.map(j => [
                        <li className="nav-item" key={j.jobId}>
                            <a className={'nav-link' + (j === this.props.selectedJob ? ' active' : '')} href="#"
                                onClick={() => this.props.onSelect(j)}>{`${j.company}: ${j.name}`}</a>
                        </li>
                    ])}
                </ul>    
            </nav>
        );
    }
}
