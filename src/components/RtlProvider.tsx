import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import rtl from "stylis-plugin-rtl"

// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: "css-ar", stylisPlugins: [rtl] },
  ltr: { key: "css-en" },
}

const RtlProvider: React.FC = ({ children }) => {
  // const { locale } = useRouter()
  // const dir = locale == 'ar' ? 'rtl' : 'ltr'
  const dir = "rtl" // TODO: remove this line when locale or other method is implemented
  const cache = createCache(options[dir])
  return <CacheProvider value={cache} children={children} />
}

export default RtlProvider
