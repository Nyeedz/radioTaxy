import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
} from 'reactotron-react-native'

Reactotron
  .configure({
    name: 'React Native Demo'
  })
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(overlay())
  .use(asyncStorage())
  .use(networking())
  .connect()

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .configure()
    .connect()

  tron.clear();

  console.tron = tron;
}
