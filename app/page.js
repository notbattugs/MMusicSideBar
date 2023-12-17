export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="group w-[80px] h-screen bg-[#131722] hover:w-[270px] transition flex justify-around items-start flex-col gap-10 transition-[width] duration-700">
        <div className="h-[40%] flex justify-around items-center flex-col">
          <div className="flex justify-center items-center ">
            {' '}
            <img
              src="https://yt3.googleusercontent.com/1OwXhMUVIbXQms0OAB-EXj-PdTYkcfTKRGl6IgRtAYja6Ia649N6sejqnJeyOLNukx-LTGXEDA=s900-c-k-c0x00ffffff-no-rj"
              className="w-[70px]"
            ></img>
            <p
              className="text-2xl text-white hidden group-hover:block "
              style={{
                transition:
                  'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
              }}
            >
              music
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <svg fill="white" width="56" height="22" viewBox="0 0 21.888 21.89">
              <path
                d="M0,10.445A10.444,10.444,0,1,1,10.444,20.89,10.456,10.456,0,0,1,0,10.445Zm2.35,0a8.094,8.094,0,1,0,8.093-8.094A8.1,8.1,0,0,0,2.351,10.445Zm4.624,0a3.47,3.47,0,1,1,3.47,3.47A3.473,3.473,0,0,1,6.974,10.445Zm2.35,0a1.119,1.119,0,1,0,1.12-1.119A1.121,1.121,0,0,0,9.324,10.445Z"
                transform="translate(0.5 0.5)"
              />
            </svg>
            <p
              className=" text-2xl text-white hidden group-hover:block "
              style={{
                transition:
                  'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
              }}
            >
              Цомог
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <svg
              fill="white"
              width="56"
              height="22"
              viewBox="0 0 22.646 21.895"
            >
              <path
                d="M0,16.288a4.592,4.592,0,0,1,6.837-4.006v-6.8A3.915,3.915,0,0,1,9.924,1.633L16.852.095a3.942,3.942,0,0,1,4.794,3.848v9.919A4.6,4.6,0,1,1,19.3,9.854V6.905L9.188,9.148v7.14a4.594,4.594,0,1,1-9.187,0Zm2.352,0a2.242,2.242,0,1,0,2.242-2.242A2.245,2.245,0,0,0,2.352,16.288ZM14.81,13.862a2.243,2.243,0,1,0,2.242-2.242A2.245,2.245,0,0,0,14.81,13.862ZM17.36,2.39,10.433,3.927A1.58,1.58,0,0,0,9.188,5.479V6.741L19.3,4.5V3.942A1.59,1.59,0,0,0,17.36,2.39Z"
                transform="translate(0.5 0.512)"
              />
            </svg>

            <p
              className=" text-2xl text-white hidden group-hover:block "
              style={{
                transition:
                  'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
              }}
            >
              Дуу
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <svg
              fill="white"
              width="56"
              height="22"
              viewBox="0 0 21.342 21.966"
            >
              <path
                d="M17.99,19.79c0-4.487-3.283-8.137-7.319-8.137h-1c-4.036,0-7.319,3.65-7.319,8.137A1.176,1.176,0,1,1,0,19.79,10.508,10.508,0,0,1,6.288,9.964,5.294,5.294,0,0,1,4.855,6.338V5.315a5.315,5.315,0,0,1,10.63,0V6.338a5.294,5.294,0,0,1-1.432,3.626,10.506,10.506,0,0,1,6.288,9.826,1.176,1.176,0,1,1-2.352,0ZM7.207,5.315V6.338a2.964,2.964,0,1,0,5.928,0V5.315a2.964,2.964,0,1,0-5.928,0ZM9,19.752v-.561a3.024,3.024,0,0,1-1.843-2.781v-.772a3.019,3.019,0,0,1,6.038,0v.772a3.023,3.023,0,0,1-1.844,2.781v.561a1.176,1.176,0,0,1-2.351,0ZM9.5,15.639v.772a.668.668,0,1,0,1.336,0v-.772a.668.668,0,1,0-1.336,0Z"
                transform="translate(0.5 0.5)"
              />
            </svg>

            <p
              className=" text-2xl text-white hidden group-hover:block "
              style={{
                transition:
                  'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
              }}
            >
              Уран бүтээлч
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <svg fill="white" width="56" height="22" viewBox="0 0 78 70">
              <path
                class="path_a cls-1"
                d="M58.31,19.51V15.75a7,7,0,0,0-7-7H37.17a7,7,0,0,0-7,7V44.36A13.28,13.28,0,1,0,37,55.94V30.05l15.94-3.73A7,7,0,0,0,58.31,19.51ZM23.69,62.43a6.49,6.49,0,1,1,6.49-6.49A6.5,6.5,0,0,1,23.69,62.43ZM51.51,19.51a.2.2,0,0,1-.14.19L37,23.07V15.75a.18.18,0,0,1,.19-.18H51.33a.18.18,0,0,1,.18.18Zm5.37,32.77H49a3.4,3.4,0,1,0,0,6.8h7.88a3.4,3.4,0,0,0,0-6.8ZM64.2,39.83H49a3.4,3.4,0,1,0,0,6.8H64.2a3.4,3.4,0,0,0,0-6.8Z"
              />
            </svg>

            <p
              className=" text-2xl text-white hidden group-hover:block "
              style={{
                transition:
                  'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
              }}
            >
              Плейлист
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <p
            className=" text-xl text-white hidden group-hover:block "
            style={{
              transition:
                'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
            }}
          >
            MMusic тухай
          </p>
          <p
            className=" text-xl text-white hidden group-hover:block "
            style={{
              transition:
                'transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;',
            }}
          >
            {' '}
            Купон код оруулах
          </p>
        </div>
      </div>
    </div>
  );
}
