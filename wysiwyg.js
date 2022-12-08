const {
    TextField,
    Autocomplete,
    Stack,
    Button
  } = MaterialUI;

const categories = [
    { title: "newtechs"},
    { title: "apprendre"},
    { title: "Nourriture"},
    { title: "WeboxCenter"}
]

function App() {
    
    const defaultProps = {
    options: categories,
    getOptionLabel: (option) => option.title,
    };
    const flatProps = {
    options: categories.map((option) => option.title),
    };

    const trixRef = React.useRef('Null');

    const [category, setCategory] = React.useState(null);

    const [title, setTitle] = React.useState(null);

    const [content, setContent] = React.useState(null);

    const handleAddFile = (event) => {
        console.log(event);
    }
    
    const addFile = () => {
        if (trixRef) {
            trixRef.current.addEventListener('trix-attachment-add', handleAddFile)
        }
    }

    React.useEffect(() => {
        addFile();
    })
    

    return (
        <div className="row font-frank">
            <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
                <h2 className="my-3">Nouvel Article</h2>
                <div>
                    <div>
                        <Stack spacing={1} sx={{ width: 300 }} className="mb-5">
                            <TextField id="standard-basic" onChange={(e) => setTitle(e.target.value)} label="Titre de l'article" variant="standard" />
                            <Autocomplete
                                {...defaultProps}
                                id="disable-close-on-select"
                                onChange={(e, v) => setCategory(v)}
                                disableCloseOnSelect
                                renderInput={(params) => (
                                <TextField {...params} label="Catégorie" variant="standard" />
                                )} />
                        </Stack>
                        <input id="x" ref={(element) => setContent(element)} type="hidden" name="content" />
                        <trix-editor input="x" ref={trixRef} className="trix-content font-frank" placeholder="Débuter son article..." style={{border: '0px'}}></trix-editor>
                    </div>
                    <Button variant="contained">Publier</Button>
                    {
                        trixRef ? console.log(trixRef.current): console.log("rien")
                    }
                </div>
            </div>
        </div>
    );
}



ReactDOM.createRoot(document.getElementById("root")).render(<App />);