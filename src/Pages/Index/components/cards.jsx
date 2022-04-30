
export default function Card() {

var windowObjectReference;

function openRequestedPopup() {
// eslint-disable-next-line 
  windowObjectReference = window.open(
    "http://www.localhost:8000/",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
}
    return(
        <>
<div className="w-8/8 mt-4">    
<button onClick={() => openRequestedPopup()}> 
<div class="shadow-lg rounded-2xl border border-blue-600  p-4">
    <div class="flex  justify-between">
        <div class="flex">
                
                <div class="flex">
                <span class="font-bold text-md text-black dark:text-white">
                    Iniciar Atividades - 
                </span>
                <span class="text-sm  dark:text-white ml-2">
                    começar atividades e teste lógicos para progrmação
                </span>
                
            </div>
        </div>
    </div>
</div>
</button>





</div>

</>


    )
}

