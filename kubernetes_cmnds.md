# Kubernetes CLI Commands

## 1. Kubernetes Pod commands

<br />
- ### Kubernetes command to view all pods

```js
kubectl get pods
```

- ### Kubernetes command to execute a command inside a pod

```js
kubectl exec -it [pod_name] [cmd]
```

- ### Command to view the logs inside a pod

```js
kubectl logs [pod_name]
```

- ### Command to delete a pod

```js
kubectl delete pod [pod_name]
```

- ### Command to process the config file

```js
kubectl apply -f [config_file_name]
```

- ### Command to describe a pod (Information about running the pod)

```js
kubectl describe pod [pod_name]
```

<br />

## Kubernetes Deployment Commands

<br />

- ### List all running deployments

```js
kubectl get deployments
```

- ### Print out details about specific deployment

```js
kubectl describe deployment [depl-name]
```

- ### Create a deployment out of a config file

```js
kubectl apply -f [config-file-name]
```

- ### Delete deployment

```js
kubectl delete deployment [depl-name]
```
