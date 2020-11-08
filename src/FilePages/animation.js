export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 0.5
    let timeline
  
    if (pathname === '/')
      timeline = getHomeTimeline(node, delay)
    else
      timeline = getDefaultTimeline(node, delay)
  
    timeline.play()
  }
  
  
<Route render={({ location }) => {
  const { pathname, key } = location

  return (
    <TransitionGroup component={null}>
      <Transition
        key={key}
        appear={true}
        onEnter={(node, appears) => play(pathname, node, appears)}
        timeout={{enter: 750, exit: 0}}
      >
        <Switch location={location}>
          <Route exact path="/" component={Home}/>
          <Route path="/author" component={Author} />
          <Route path="/about" component={About} />
        </Switch>
      </Transition>
    </TransitionGroup>
  )
}}/>