import * as React from "react";
import { Candidate } from "../Model/Candidate";

interface Props
{
    candidates: Candidate[]
}    

export class CandidateList extends React.PureComponent<Props>
{
    render(): JSX.Element
    {
        return (
            <div>
                <h2>Candidates</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.candidates.map(c =>
                            <tr key={c.candidateId}>
                                <td>{c.candidateId}</td>  
                                <td>{c.name}</td>
                                <td>{c.skills}</td>  
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
