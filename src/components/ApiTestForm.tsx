'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function ApiTestForm() {

  const [url, setUrl] = useState("")
  const [method, setMethod] = useState("GET")
  const [queryParams, setQueryParams] = useState([])
  const [body, setBody] = useState("")
  const [useApiKey, setUseApiKey] = useState(false)
  const [apiKey, setApiKey] = useState("")
  const [response, setResponse] = useState("")

  const handleSendRequest = () => {
  
    console.log(`Sending request to ${url} with method ${method}`)
  }
  const handleApiKeyChange = (checked: boolean) => {
    setUseApiKey(checked)
  }


  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Gotcha | Little API Tester</h1>
      <div className="space-y-4">
        <div>
          <Label htmlFor="url">URL</Label>
          <Input
            id="url"
            placeholder="https://api.example.com/endpoint"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="method">Method</Label>
          <Select onValueChange={(value) => setMethod(value)}>
            <SelectTrigger id="method">
              <SelectValue 
                placeholder="Select method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GET">GET</SelectItem>
              <SelectItem value="POST">POST</SelectItem>
              <SelectItem value="PUT">PUT</SelectItem>
              <SelectItem value="DELETE">DELETE</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Query Parameters</Label>
          <div className="flex space-x-2 mt-2">
            <Input placeholder="Key" />
            <Input placeholder="Value" />
          </div>
          <Button variant="outline" className="mt-2">
            Add Parameter
          </Button>
        </div>
        <div>
          <Label htmlFor="body">Request Body</Label>
          <Textarea
            id="body"
            placeholder="Enter JSON body"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch 
            id="use-api-key"
            checked={useApiKey}
            onCheckedChange={handleApiKeyChange} />
          <Label htmlFor="use-api-key">Use API Key</Label>
        </div>
        <div>
          <Label htmlFor="api-key">API Key</Label>
          <Input
            id="api-key"
            type="password"
            placeholder="Enter your API key"
          />
        </div>
        <Button onClick={handleSendRequest}>
          Send Request
        </Button>
        <div>
          <Label htmlFor="response">Response</Label>
          <Textarea
            id="response"
            readOnly
            className="font-mono"
            rows={10}
          />
        </div>
      </div>
    </div>
  )
}