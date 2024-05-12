const link = encodeURI(window.location.href)
const msg = encodeURIComponent("Check out this page on Ricky's website!")

const facebook = document.querySelector(".facebook")
facebook.href = `https://www.facebook.com/share.php?u=${link}`

const linkedin = document.querySelector(".linkedin")
linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`

const twitter = document.querySelector(".twitter")
twitter.href = `https://twitter.com/share?&url=${link}&text=${msg}&hashtags=cats,kittens`

const reddit = document.querySelector(".reddit")
reddit.href = `https://www.reddit.com/submit?url=${link}&title=${msg}`
