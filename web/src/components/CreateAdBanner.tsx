import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner(){
    return(
        <div className="pt-1 bg-nlwGradientText mt-8 self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2x text-white font-black block">
              Não achou duo pro camp?
            </strong>
            <span className="text-zinc-400">
              Dá um SOS ae pra chamar ele pra call!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Chamar SOS duo!
          </button>
        </div>
      </div>
    )
}