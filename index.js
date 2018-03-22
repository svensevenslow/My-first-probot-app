module.exports = (robot) => {
  robot.log('Yay, the app was loaded!')

  robot.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for opening this issue!' })
    return context.github.issues.createComment(issueComment)
  })

}
