import React, { useState, useEffect } from 'react';
import './githubactivity.css';
import { Octokit } from "@octokit/rest";
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN
});

const GithubActivity = () => {
  const [commits, setCommits] = useState<any[]>([]);

  useEffect(() => {
    octokit.request('GET /users/{username}/repos', {
        username: 'denizisikli'
    }).then((response) => {
        const repoPromises = response.data.map(async (repo: any) => {
            const commitsResponse = await octokit.request('GET /repos/{owner}/{repo}/commits', {
                owner: 'denizisikli',
                repo: repo.name
            });
            return ({ repo, commits: commitsResponse.data });
        });
  
        Promise.all(repoPromises).then((reposData) => {
            const newCommits = reposData
                .flatMap(({ repo, commits }) => 
                    commits.map((commit: any) => ({
                        repo: <a href={commit ? commit.html_url : ''}>{repo.name}</a>,
                        message: commit.commit.message,
                        date: new Date(commit.commit.author.date)
                    }))
                )
                .filter((commit) => {
                    const commitDate = commit.date;
                    const today = new Date();
                    const daysDiff = Math.floor((today.getTime() - commitDate.getTime()) / (1000 * 3600 * 24));
                    return daysDiff <= 20;
                });
  
            // Sort commits by date
            newCommits.sort((a, b) => b.date.getTime() - a.date.getTime());
            
            setCommits(newCommits);
        });
    });
  }, []);
  

  return (
    <div className="githubactivity">
        <h2>Github Activity</h2>
        <div className="commits">
            {commits.map((commit, index) => (
                <div key={index} className="commit">
                    <h3>{commit.repo}</h3>
                    <p className="commit_message">{commit.message}</p>
                    <p>{commit.date.toLocaleDateString()}</p>
                </div>
            ))}
            <span>
                <Link to="/" className="home-button">
                    <FaArrowLeft className="back-arrow"/>
                </Link>
            </span>
        </div>
    </div>
  );
};

export default GithubActivity;
