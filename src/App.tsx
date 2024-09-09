import { Popover } from "@mui/material";
import { MouseEvent, useCallback, useState } from "react";
import ReactFlow from "reactflow";
 
import 'reactflow/dist/style.css';
import './App.css'


const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' }, type: 'node' },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' }, type: 'node'  },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const Node = (props: any) => {
  const [popover, setPopover] = useState<any>(null)

  const onContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault()
    setPopover({left: e.clientX, top: e.clientY})
  }, [])

  const onClosePopover = useCallback(() => setPopover(null), [])

  return <>
    <div 
      className="react-flow__node-default" 
      onContextMenu={onContextMenu}>
      <p>{props.data.label}</p>
    </div>
    
    <Popover 
      open={!!popover} 
      onClose={onClosePopover}
      anchorReference="anchorPosition" 
      anchorPosition={popover}>
      Hello world
    </Popover>
  </>
}

const nodeTypes = {node: Node}
 
export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={nodeTypes} />
    </div>
  );
}