# JobMatcher
This is the prototype for the interface. It works on a hard-coded sample of the job and candidate
JSON (with the additional job field "recommendedCandidates" which correlates jobs and candidates).
Ideally the server should fetch the data from the API and do the correlation. Also this should be
done lazily rather than all on page load. Next steps :)
## How to run locally
Ensure you have the .NET Core 2.0 sdk installed, as well as a recent Node and NPM. Then from the root
of the checkout:
```
npm install
npm run build
dotnet run
```
Finally open http://localhost:5000/ in a browser.
