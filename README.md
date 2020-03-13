# romar-web-app-k8

Simple web app using Kubernetes(K8s)

## Dependencies

1. [NodeJS](https://nodejs.org/en/download/)

2. [Docker](https://docs.docker.com/install/)

3. [Kubernetes](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/romarcablao/romar-web-app-k8s.git
   cd romar-web-app-k8s
   ```
2. Build docker image and deploy to docker repository (or use the existing one).

   ```bash
   docker pull romarcablao/my-web-app
   ```

3. Apply kubernetes yaml files.

   ```bash
   kubectl apply -f k8s
   ```

4. Check the service and pods.

   ```bash
   kubectl get service
   kubectl get deployment
   kubectl get pods
   ```

---

[Romar Cablao](https://www.linkedin.com/in/romarcablao) | <romarcablao@gmail.com>
