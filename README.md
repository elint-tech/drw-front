# drw-front

Repo for Elint Tech's frontend challenge

## Getting Started

- Clone this repository;
- Create a branch and name it with your first name in lower case;
- Code and open a pull request when everything is done.

Make sure to let all clear to us. The documentation will have a huge impact in your perfomance.

## Resources

- [Download challenge description](https://s3.us-east-2.amazonaws.com/nn.weights/Challenge.pdf)
- [Elint's discord](https://discord.gg/xydMVT)
- [Elint's colour scheme](https://coolors.co/1a1c38-464866-dee0f2-2e9cca-29648a)
- [Elint's assets](https://wetransfer.com/downloads/411d57f8616ccec8deb4fffe4e78988020201002194635/28d0ac)
- [Frontend templates examples](https://themehunt.com/items/html/landing-pages/latest) (a lot more on the web)
- [Heroku](https://www.heroku.com/free)
- [AWS Free Tier](https://aws.amazon.com/pt/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc)
- [GCP Free Tier](https://cloud.google.com/free)
- [GitHub student backpack](https://education.github.com/pack)
- [Awesome Django](https://github.com/wsvincent/awesome-django)
- [Awesome Flask](https://github.com/humiaozuzu/awesome-flask)
- [Awesome React](https://github.com/enaqx/awesome-react)
- [_.mp3_ sample 1](https://s3.us-east-2.amazonaws.com/nn.weights/frank.mp3)
- [_.mp3_ sample 2](https://s3.us-east-2.amazonaws.com/nn.weights/interview.mp3)
- [JSON example reponse from transcriber server](https://s3.us-east-2.amazonaws.com/transcripted.files/3xeaznnz.json)

## Challenge

You can access the challenge page at http://elint-challenge.s3-website-sa-east-1.amazonaws.com/

Video Link: https://youtu.be/Ba79hoAA1G4

### Technologies used

1. Javascript
2. React
3. React Router
4. Axios
5. Bootstrap
6. Semantic UI
7. Font Awesome
8. AWS s3

### How to run locally

1. Install Node.js
2. Clone this repository
3. Open _cmd_(Windows) or _Terminal_(MacOS/Linux), go to project root directory
4. Install the required libraries with: `npm install --save axios react-router-dom`
5. Run the project with `npm start`

### Deploying

You can always use Vercel or Netfly services. That are way more easy and have built-in HTTPS. But I needed an HTTP hosting because the API is also in HTTP. So I used AWS s3 static hosting. I used [this article](https://medium.com/serverlessguru/deploy-reactjs-app-with-s3-static-hosting-f640cb49d7e6) as a reference.
