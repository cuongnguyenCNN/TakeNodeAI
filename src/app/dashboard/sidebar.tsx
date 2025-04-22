import Link from "next/link";
import SidebarWithFolder from "./sidebarwithfolder";

function convertStyleStringToObject(styleString: string) {
  const styleObject: { [key: string]: string } = {};

  styleString.split(";").forEach((style) => {
    if (style.trim()) {
      const [property, value] = style.split(":");
      if (property && value) {
        const camelCaseProperty = property
          .trim()
          .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert to camelCase
        styleObject[camelCaseProperty] = value.trim();
      }
    }
  });

  return styleObject;
}
export default async function SideBar() {
  return (
    <div className="fixed h-full z-50 w-[272px] max-[866px]:left-[-272px]  duration-300 left-0 bg-background max-tablet:w-[80px] py-4 flex flex-col overflow-hidden transition-all duration-400 border-r border-zinc-200  dark:border-zinc-800">
      <div className="flex h-full flex-col overflow-y-hidden">
        <div className="flex justify-center mb-7">
          <Link href="/" className="flex items-center gap-2">
            {/* <img
            alt="logo"
            loading="lazy"
            width="25"
            height="50"
            decoding="async"
            data-nimg="1"
            className="object-contain dark:hidden"
            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.3ed2993e.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.3ed2993e.png&amp;w=64&amp;q=75 2x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.3ed2993e.png&amp;w=64&amp;q=75"
            style={convertStyleStringToObject("color: transparent;")}
          /> */}
            {/* <img
            alt="logo"
            loading="lazy"
            width="25"
            height="50"
            decoding="async"
            data-nimg="1"
            className="object-contain hidden dark:block rounded-lg"
            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.34e7f103.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.34e7f103.png&amp;w=64&amp;q=75 2x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.34e7f103.png&amp;w=64&amp;q=75"
            style={convertStyleStringToObject("color: transparent;")}
          /> */}
            <h4 className="scroll-m-20 tracking-tight text-2xl font-black">
              Noteflow AI
            </h4>
          </Link>
          <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 size-9 hidden max-[866px]:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-panel-left-close"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M9 3v18"></path>
              <path d="m16 15-3-3 3-3"></path>
            </svg>
          </button>
        </div>
        <small className="text-sm leading-none mb-2 font-bold flex items-center mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-folder-tree mr-2"
          >
            <path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path>
            <path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path>
            <path d="M3 5a2 2 0 0 0 2 2h3"></path>
            <path d="M3 3v13a2 2 0 0 0 2 2h3"></path>
          </svg>
          Folders
        </small>
        <div className="flex-1 overflow-y-auto">
          <div
            dir="ltr"
            className="relative overflow-hidden"
            style={convertStyleStringToObject(
              "position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
            )}
          >
            <div
              data-radix-scroll-area-viewport=""
              className="h-full w-full rounded-[inherit]"
              style={convertStyleStringToObject("overflow: hidden scroll;")}
            >
              <div
                style={convertStyleStringToObject(
                  "min-width: 100%; display: table;"
                )}
              >
                <div className="transition-all duration-200 flex-1  h-fit pb-12 mx-4">
                  <div className="flex-1 flex flex-col gap-1 ">
                    <button className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3 w-full justify-between">
                      <div className="flex items-center text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-folder-open mr-2"
                        >
                          <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path>
                        </svg>
                        All notes
                      </div>
                      <small className="font-medium text-muted-foreground text-xs">
                        (3)
                      </small>
                    </button>
                    <li
                      className="list-none"
                      style={convertStyleStringToObject(
                        "overflow: hidden; height: auto;"
                      )}
                    >
                      <button className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full justify-between">
                        <div className="flex items-center text-xs">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-folder-closed mr-2"
                          >
                            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                            <path d="M2 10h20"></path>
                          </svg>
                          hsdh
                        </div>
                        <small className="font-medium text-muted-foreground text-xs">
                          (0)
                        </small>
                      </button>
                    </li>
                    <div className="absolute bottom-0 left-0 px-4 w-full">
                      <button className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full justify-start bottom-0 left-0">
                        <svg
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 12h12M12 18V6"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        Create new folder
                      </button>
                      {/* <SidebarWithFolder></SidebarWithFolder> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full justify-center items-center flex gap-5">
          <Link target="_blank" href="mailto:support@notewave.app">
            <button className="active:scale-110 transition-all duration-100">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-message-circle-question"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <small className="font-medium text-[10px]">Support</small>
              </div>
            </button>
          </Link>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full mb-4 mt-2"
        ></div>
        <div
          style={convertStyleStringToObject(
            "opacity: 1; filter: blur(0px); will-change: transform; transform: translateY(-6px);"
          )}
        >
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-3 mx-4">
            <div className="p-6 py-4 flex justify-center items-center flex-col px-3">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-crown h-4 w-4"
                >
                  <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                  <path d="M5 21h14"></path>
                </svg>
                <p>Upgrade plan</p>
              </button>
              <small className="text-sm font-medium leading-none mt-4 text-center text-muted-foreground">
                Get more features and unlimited access
              </small>
              <div className="w-full mt-4">
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-notebook size-4"
                    >
                      <path d="M2 6h4"></path>
                      <path d="M2 10h4"></path>
                      <path d="M2 14h4"></path>
                      <path d="M2 18h4"></path>
                      <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                      <path d="M16 2v20"></path>
                    </svg>
                    <span className="text-xs">
                      <span className="font-extrabold">2</span> / 3 Notes free
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-info size-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <div
                  role="progressbar"
                  data-state="indeterminate"
                  data-max="100"
                  className="relative w-full overflow-hidden rounded-full bg-secondary h-1"
                >
                  <div
                    data-state="indeterminate"
                    data-max="100"
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={convertStyleStringToObject(
                      "transform: translateX(-33.3333%);"
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-4 mx-4">
          <div className="p-6 py-3 flex justify-between w-full px-3">
            <div className="flex items-center flex-1 gap-2 ">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <img
                  className="aspect-square h-full w-full"
                  src="https://lh3.googleusercontent.com/a/ACg8ocJX9IHRDYcCK_coJIx7ueRGHMiyCLZQ1xAtPOiRpRoPxV89p4dl=s96-c"
                />
              </span>
              <div className="flex flex-col w-[140px]">
                <small className="text-sm font-medium leading-none truncate">
                  <b>Dell Lion</b>
                </small>
                <small className="font-medium text-muted-foreground text-xs truncate">
                  cuongnguyen71195@gmail.com
                </small>
              </div>
            </div>
            <button className="active:scale-110 transition-all duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-settings"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
